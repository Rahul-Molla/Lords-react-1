import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import './Passwordlist.scss'

const PasswordList = ({ passwords }) => {
    return (
        <div className="list-container">

            <table>

                {
                    passwords.map((p) => (
                        <tr>
                            <div className="details">
                                <th>{p.id}</th>
                                <th>{p.title}</th>
                                <th>{p.username}</th>
                                <th>{p.password}</th>
                            </div>
                            <div className="actions">

                                <MdDelete />
                                <FaEdit />

                            </div>
                        </tr>
                    ))
                }



            </table>

        </div>
    )
}

export default PasswordList
