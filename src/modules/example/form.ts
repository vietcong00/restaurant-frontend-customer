import { showErrorNotificationFunction } from '@/utils/util';
import { ElLoading, ElMessageBox } from 'element-plus';
import moment from 'moment';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { INPUT_NUMBER_MAX_VALUE, INPUT_TEXT_MAX_LENGTH } from './constants';
import { bookingService } from './services/api.service';
import { IPostQueryBooking } from './types';

export const validateBookingSchema = yup.object({
    nameCustomer: yup.string().trim().max(INPUT_TEXT_MAX_LENGTH).required(),
    phone: yup
        .string()
        .trim()
        .matches(/^([0-9]){10,11}$/, 'user.form.phoneNumber.invalid')
        .optional()
        .required(),
    numberPeople: yup
        .number()
        .integer()
        .min(0)
        .optional()
        .transform((val) => (isNaN(val) ? null : val))
        .max(INPUT_NUMBER_MAX_VALUE),
    arrivalTime: yup.string().required(),
});

export function initData() {
    const initValues = {
        nameCustomer: '',
        phone: '',
        numberPeople: undefined,
        arrivalTime: undefined,
    };
    const { handleSubmit, errors, resetForm, validate } = useForm({
        initialValues: initValues,
        validationSchema: validateBookingSchema,
    });

    const onSubmit = handleSubmit(async (values) => {
        const createBody = {
            ...values,
            nameCustomer: values.nameCustomer?.trim(),
            phone: values.phone,
            numberPeople: values.numberPeople,
            arrivalTime: moment(values.arrivalTime).utc().fmFullTimeWithoutSecond(),
        } as IPostQueryBooking;
        const loading = ElLoading.service({
            target: '.booking-form-popup',
        });

        const response = await bookingService.create(createBody);
        loading.close();
        if (response.success) {
            const textWarning = `Đơn đặt bàn của quý khách sẽ được giữ tối đa 30 phút so với thời gian đặt bàn! Quý khách vui lòng đến đúng giờ !`;
            ElMessageBox.alert(textWarning, 'Thông báo', {
                confirmButtonText: 'OK',
            });
        } else {
            showErrorNotificationFunction(response.message as string);
        }
    });
    const { value: nameCustomer } = useField('nameCustomer');
    const { value: phone } = useField('phone');
    const { value: numberPeople } = useField('numberPeople');
    const { value: arrivalTime } = useField('arrivalTime');

    return {
        nameCustomer,
        phone,
        numberPeople,
        arrivalTime,
        errors,

        validate,
        onSubmit,
        resetForm,
    };
}
