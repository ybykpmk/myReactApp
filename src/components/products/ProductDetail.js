import React from "react";
import TextInput from '../toolbox/TextInput';
import { Button } from "reactstrap";

const ProductDetail=(
    categories,
    product,
    onSave,
    onChange
)=>{
    return(
        <form onSubmit={onSave}>
            <h2>{product.id?"Güncelle":"Ekle"}</h2>
            <TextInput name="productName" label="Product Name" value={product.productName} onChange={onChange} error="Hata"></TextInput>
            <Button type="submit" className="btn btn-success">Save</Button>
        </form>
    )
};

export default ProductDetail;