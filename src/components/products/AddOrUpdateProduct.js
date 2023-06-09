import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts, saveProduct } from "../../redux/actions/productActions";
import { getCategories } from "../../redux/actions/categoryActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props
}) {
    const [ product, setProduct ] = useState({ ...props.product });
    const [errors,setErrors]=useState({});
    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props.product })
    }, [props.product]);

    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }));
        validate(name,value);
    }

    function validate(name,value){
        if (name==="productName" && value==="")
        {
            setErrors(previousErrors=>({...previousErrors,productName:"Ürün ismi olmalıdır"}));
        }
        else
        {
            setErrors(previousErrors=>({...previousErrors,productName:""}));            
        }
        if (name==="categoryId" && value==="")
        {
            setErrors(previousErrors=>({...previousErrors,categoryId:"Category ismi seçilmelidir"}));
        }
        else
        {
            setErrors(previousErrors=>({...previousErrors,categoryId:""}));            
        }
        if (name==="unitPrice" && value==="")
        {
            setErrors(previousErrors=>({...previousErrors,unitPrice:"Unit Price olmalıdır"}));
        }
        else
        {
            setErrors(previousErrors=>({...previousErrors,unitPrice:""}));            
        }
        if (name==="quantityPerUnit" && value==="")
        {
            setErrors(previousErrors=>({...previousErrors,quantityPerUnit:"Quantity Per Unit olmalıdır"}));
        }
        else
        {
            setErrors(previousErrors=>({...previousErrors,quantityPerUnit:""}));            
        }
        if (name==="unitsInStock" && value==="")
        {
            setErrors(previousErrors=>({...previousErrors,unitsInStock:"Units In Stock olmalıdır"}));
        }
        else
        {
            setErrors(previousErrors=>({...previousErrors,unitsInStock:""}));            
        }        
    }

    function handleSave(event) {
        event.preventDefault();
        saveProduct(product).then(() => {
            history.push("/")
        });
    }

    return (
        <ProductDetail product={product} categories={categories} onChange={handleChange} onSave={handleSave} errors={errors} ></ProductDetail>
    )
}

function mapStateToProps(state, ownProps) {
    const productId = ownProps.match.params.productId;
    const product = productId && state.productListReducer.length > 0 ? getProductById(state.productListReducer, productId) : {};
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

export function getProductById(products, productId) {
    let product = products.find(product => product.id == productId) || null;
    return product;
}

const mapDispatchToProps = {
    getCategories, saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct)