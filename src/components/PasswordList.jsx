import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import './Passwordlist.scss'

const PasswordList = () => {
    return (
        <div className="list-container">

            <table>
               
                
                <tr>
                    <div className="details">
                        <th>Figma</th>
                        <th>Saniyaj</th>
                        <th>admin123</th>
                    </div>
                    <div className="actions">

                        <MdDelete />
                        <FaEdit />

                    </div>
                </tr>
                <tr>
                    <div className="details">
                        <th>Figma</th>
                        <th>Saniyaj</th>
                        <th>admin123</th>
                    </div>
                    <div className="actions">

                        <MdDelete />
                        <FaEdit />

                    </div>
                </tr>
                <tr>
                    <div className="details">
                        <th>Figma</th>
                        <th>Saniyaj</th>
                        <th>admin123</th>
                    </div>
                    <div className="actions">

                        <MdDelete />
                        <FaEdit />

                    </div>
                </tr>
                <tr>
                    <div className="details">
                        <th>Figma</th>
                        <th>Saniyaj</th>
                        <th>admin123</th>
                    </div>
                    <div className="actions">

                        <MdDelete />
                        <FaEdit />

                    </div>
                </tr>

            </table>

        </div>
    )
}

export default PasswordList
