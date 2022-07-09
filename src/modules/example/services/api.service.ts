import service from '@/plugins/axios';
import { BaseService } from '@/utils/api';

class CategoryService extends BaseService {}
export const categoryService = new CategoryService({ baseUrl: 'category' }, service);
class FoodService extends BaseService {}
export const foodService = new FoodService({ baseUrl: 'food' }, service);
class BookingService extends BaseService {}
export const bookingService = new BookingService({ baseUrl: 'common/booking' }, service);
