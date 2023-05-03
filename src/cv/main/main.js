import './main.css'
import Name from './Name/name'
import Project from './Projects/project'
import Exp from './Expirence/expirence'
import Education from './Education/education'
function Main(){
    return(
        <div className="main">
<Name/>
<Project/>
<Exp/>
<Education/>
        </div>
    )
}
export default Main