export default function IntroPage({username}: {username: string}) {
    function getGreeting() {
        const hour = new Date().getHours();
      
        if (hour < 12) return "Good Morning";
        if (hour < 17) return "Good Afternoon";
        return "Good Evening";
    }

    const greet = getGreeting();
      
    return (
        <>
        <div className="w-full flex justify-start">
  <div className="flex flex-col">
    <div className="flex gap-3 text-5xl px-5 py-3 font-bold">
      <div>{greet},</div>
      <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
        {username}
      </div>
    </div>

    <div className="text-gray-500 px-6 font-medium">
      Spend smart. Track better. Own your finances.
    </div>
  </div>
</div>

        </>
    );
}