import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import './PasswordList.scss'

const PasswordList = ({ passwords, onDelete , onEdit}) => {
    return (
        <div className="list-container">

            <div className="list-main">

                {
                    passwords.map((p) => (
                        <div className="d-main" key={p.id}>
                            <div className="details">
                                <p>{p.id}</p>
                                <p>{p.title}</p>
                                <p>{p.username}</p>
                                <p>{p.password}</p>
                            </div>
                            <div className="actions">

                                <MdDelete onClick={()=>onDelete(p.id)}/>
                                <FaEdit onClick={()=> onEdit(p)}/>

                            </div>
                        </div>
                    ))
                }



            </div>

        </div>
    )
}

export default PasswordList
