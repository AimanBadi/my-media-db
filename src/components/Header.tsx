import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSession, signIn, signOut } from "next-auth/react";
import { Space, Button, AutoComplete, Input } from "antd";

const Header = () => {
  const { data: session } = useSession();

  return (
    <Space style={{ padding: "1rem 0" }}>
      <Button type="primary">Login</Button>
      <AutoComplete>
        <Input.Search size="large" placeholder="input here" />
      </AutoComplete>
    </Space>
  );

  // return (
  //   <div className="flex justify-start items-start">
  //     <div className="flex items-center gap-4">
  //       {!session ? (
  //         <>
  //           <button
  //             className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-white font-bold transition"
  //             onClick={() => signIn()}
  //           >
  //             Log in
  //           </button>
  //         </>
  //       ) : (
  //         <button
  //           className="bg-slate-200 hover:bg-slate-400 px-4 py-2 rounded-lg transition"
  //           onClick={() => signOut()}
  //         >
  //           Sign out
  //         </button>
  //       )}
  //       <div className="relative flex justify-end">
  //         <FontAwesomeIcon
  //           icon={faMagnifyingGlass}
  //           className="w-5 h-5 absolute top-[30%] right-4"
  //         />
  //         <input
  //           type="text"
  //           name="search"
  //           className="outline-none bg-slate-200 rounded-full p-4 pr-10 w-[250px] focus:w-[70vw] transition-width"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Header;
