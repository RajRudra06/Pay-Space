export default function UserLogo({username}:{username:string}){

    const initials=username.split(" ").map((n)=>n[0]).join("").toUpperCase();

    return(
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-sm">
            {initials}
        </div>
    )
}