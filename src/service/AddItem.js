import CartContent from "../components/CartContent";


function AddItem(props) {
    let cartItem = [...props.cart]

    function addItem(){
    cartItem.push([{
        id: props.id,
        image: props.image,
        title: props.name,
        price: props.price,
    }
    ])
} return (
    <>
    <CartContent />
    </>
            
)
}
export default AddItem;