import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffe = () => {

    const coffee = useLoaderData();
    const {_id,name,quantity,supplier,taste,category,details, photo} = coffee;
    console.log(coffee);

    const handleUpdateCoffee = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffe = {name,quantity,supplier,taste,category,details, photo};
        console.log(updatedCoffe);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffe)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfulluy',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    };

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h3 className="text-3xl font-extrabold">update coffe: {name}</h3>
            <form onSubmit={handleUpdateCoffee}> 
                {/*form name and quantity row  */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffe Name</span>
                    </label>
                    <label className="input-group input-group-vertical">                     
                        <input type="text" name="name" defaultValue={name} placeholder="coffe name" className="input input-bordered w-full" />
                    </label>
                    </div> 
                    <div className="form-control w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group input-group-vertical">                     
                        <input type="text" defaultValue={quantity} name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                    </div> 
                </div>
                {/*form supplier and taste row */}
                <div className="md:flex my-8">
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier name</span>
                    </label>
                    <label className="input-group input-group-vertical">                     
                        <input type="text" defaultValue={supplier} name="supplier" placeholder="supplier name" className="input input-bordered w-full" />
                    </label>
                    </div> 
                    <div className="form-control w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group input-group-vertical">                     
                        <input type="text" defaultValue={taste} name="taste" placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                    </div> 
                </div>
                {/* category and details row  */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group input-group-vertical">                     
                        <input type="text" defaultValue={category} name="category" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                    </div> 
                    <div className="form-control w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group input-group-vertical">                     
                        <input type="text" defaultValue={details} name="details" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                    </div> 
                </div>
                {/* photo url row  */}
                <div className="mt-8 mb-7">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <label className="input-group input-group-vertical">                     
                        <input type="text" defaultValue={photo} name="photo" placeholder="Photo url" className="input input-bordered w-full" />
                    </label>
                    </div>                 
                </div>
                <input type="submit" className="btn btn-block" value="Update coffe" />
            </form>
        </div>
    );
};

export default UpdateCoffe;