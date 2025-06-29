import SideBarItem from "./sideBarItem"
import { Home,History,Banknote,Repeat,Building } from "lucide-react"
export default function SideBarItems(){
    return(
        <>
        <SideBarItem text="Home" link="/" logo={ <Home/> }></SideBarItem>

        <SideBarItem text="Payment Setup" link="/payments-methods" logo={ <Banknote/> }></SideBarItem>
        
        <SideBarItem text="Transaction History" link="/transactions" logo={ <History/> }></SideBarItem>

        <SideBarItem text="Tranfer funds" link="/transfer" logo={ <Repeat/> }></SideBarItem>

        <SideBarItem text="Connect Bank" link="/connect-bank" logo={ <Building/> }></SideBarItem>
        </>
    )
}