import React from 'react';
//import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg';
import ProductPrice from '../../../../core/componentes/ProductPrice';
import { Product } from '../../../../core/types/Products';
import './styles.scss';

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => (
    <div className="card-base border-radius-10 product-card">
       <img src={product.imgUrl} alt={product.name} className="product-card-image"/>
       <div className="product-info">
           <h6 className="product-name">
               {product.name}
            </h6>
           <ProductPrice price={product.price} />    
       </div>
    </div>
);

export default ProductCard;