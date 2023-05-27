import React from "react";
import TextInput from '../toolbox/TextInput';
import { Button } from "reactstrap";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({
    categories,
    product,
    onSave,
    onChange
}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput name="productName" label="Product Name" value={product.productName} onChange={onChange} error="Hata"></TextInput>
            <SelectInput name="categoryId" label="Category" value={product.categoryId || ""} defaultOption="Seçiniz" options={categories.map(category => ({
                value: category.id,
                text: category.categoryName
            }))} 
            onChange={onChange}
            error="Hata"
            />
            <Button type="submit" className="btn btn-success">Save</Button>
        </form>
    )
};

export default ProductDetail;