import Home from '../pages/Home';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';
export default [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/product',
        component: Product,
        name: 'product'
    }, {
        path: '/product/:id',
        component: ProductDetail,
        name: 'ProductDetail',
        props: true
    }

]