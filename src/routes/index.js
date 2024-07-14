
import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SinginPage from "../pages/SinginPage/SinginPage";
import SingupPage from "../pages/SingupPage/SingupPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
    ,
    {
        path: '/SingIn',
        page: SinginPage,
        isShowHeader: true
    }
    ,
    {
        path: '/SingUp',
        page: SingupPage,
        isShowHeader: true
    },
    {
        path: '/Product-Detail',
        page: ProductDetailPage,
        isShowHeader: true
    }
   
]
export default routes;