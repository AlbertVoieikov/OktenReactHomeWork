import {useForm} from "react-hook-form";

import {createUser} from "../../services/user.service";

function Users() {
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            name: 'name',
            username: 'username',
            email: 'email',
            phone: 'phone'
        }
    });
    const submit = (obj) =>{
        createUser(obj).then(value => console.log(value))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name',{required: true})}/>
                {
                    errors.name && <p>it is important</p>
                }
                <input type="text" {...register('username',{required: true})}/>
                {
                    errors.username && <p>it is important</p>
                }
                <input type="email" {...register('email',{required: true})}/>
                {
                    errors.email && <p>it is important</p>
                }
                <input type="text"/>
                <input type="submit" />

            </form>

        </div>
    );
}

export {Users};