import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-start items-start p-6">
      <div className="flex items-center gap-4">
        {!session ? (
          <>
            <button
              className="bg-emerald-400 hover:bg-emerald-600 px-4 py-2 rounded-lg text-white font-bold transition"
              onClick={() => signIn()}
            >
              Log in
            </button>
          </>
        ) : (
          <button
            className="bg-slate-200 hover:bg-slate-400 px-4 py-2 rounded-lg transition"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        )}
        <div className="relative flex justify-end">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="w-5 h-5 absolute top-[30%] right-4"
          />
          <input
            type="text"
            name="search"
            className="outline-none bg-slate-200 rounded-full p-4 pr-10 w-[250px] focus:w-[70vw] transition-width"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
