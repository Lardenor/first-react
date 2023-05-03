import Img from "./comp_side/img/img";
import Contacts from "./comp_side/contacts/contact";
import Tech from "./comp_side/tech_skills/tech";
import Soft from "./comp_side/soft_skills/soft";
import './sidebar.css'
function Sidebar(){
    return(
        <div className="sidebar">
            
<Img/>
<Contacts/>
<Tech/>
<Soft/>
        </div>

    );
}
export default Sidebar