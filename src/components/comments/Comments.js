import {useForm} from "react-hook-form";

import {createComment} from "../../services/comment.service";

function Comments() {
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            title: 'title',
            email: 'email',
            body: 'body'
        }
    });
    const submit = (obj) =>{
        createComment(obj).then(value => console.log(value))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('title',{required: true})}/>
                {
                    errors.title && <p>it is important</p>
                }
                <input type="email" {...register('email',{required: true})}/>
                {
                    errors.email && <p>it is important</p>
                }
                <input type="text" {...register('body',{required: true})}/>
                {
                    errors.body && <p>it is important</p>
                }

                <input type="submit" />

            </form>

        </div>
    );
}

export {Comments};