import queryString from "query-string";
import AuthLayout from "./AuthLayout";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export default function Login() {
  // const { search } = useLocation();
  // const values = queryString.parse(search);
  // console.log(values.expiresIn, "***");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const history = useHistory();

  function handleLogin(data) {
    //https://kiwitter-node-77f5acb427c1.herokuapp.com/login
    // dark_magician
    // 123456

    axios
      .post("https://kiwitter-node-77f5acb427c1.herokuapp.com/login", data)
      .then(res=> {
        
        const token = res.data.token;
        
        const decoded = jwtDecode(token);

        console.log(decoded);

        localStorage.setItem("kiwitter_user", token);

        toast.success("Giriş başarılı. Ana sayfaya yönlendiriliyorsunuz.");

        setTimeout(() => {

          history.push("/");

        }, 3000);
      })
      .catch(err=>{
        
        console.log(err);

        toast.error("Giriş başarısız.")
      });
  }

  return (
    <AuthLayout>
      <h1 className="text-3xl text-center font-semibold tracking-tighter text-lime-700">
        Hoş Geldin!
      </h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="pt-4">
          <div className="flex justify-between gap-2 items-baseline pb-1">
            <label htmlFor="nickname ">Kullanıcı adı</label>
            <span className="text-sm font-medium text-red-600">
              {errors.nickname && errors.nickname.message.toString()}
            </span>
          </div>
          <input
            type="text"
            className="w-full h-10 px-2 border rounded-md border-gray-300"
            {...register("nickname", { required: "Bu alan zorunlu" })}
          />
        </div>

        <div className="pt-4">
          <div className="flex justify-between gap-2 items-baseline pb-1">
            <label htmlFor="password">Şifre</label>
            <span className="text-sm font-medium text-red-600">
              {errors.password && errors.password.message.toString()}
            </span>
          </div>
          <input
            type="password"
            className="w-full h-10 px-2 border rounded-md border-gray-300"
            {...register("password", { required: "Bu alan zorunlu" })}
          />
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="h-12 text-center block w-full rounded-lg bg-lime-700 text-white font-bold "
          >
            GİRİŞ
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
