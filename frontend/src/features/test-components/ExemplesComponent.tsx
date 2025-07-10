import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { useProducts } from "../../store/productsStore";
import EmilServiceComponent from "../../store/EmilServiceComponent";

// Schema Zod de validare
const formSchema = z
  .object({
    email: z.string().email("Email invalid"),
    password: z.string().min(6, "Parola trebuie să aibă minim 6 caractere"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Parolele nu se potrivesc",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

export default function ExemplesComponent() {
  const { products } = useProducts();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newForm = { ...formData, [name]: value } as FormData;
    setFormData(newForm);

    const result = formSchema.safeParse(newForm);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      for (const issue of result.error.errors) {
        fieldErrors[issue.path[0] as keyof FormData] = issue.message;
      }
      setErrors(fieldErrors);
      setIsFormValid(false);
    } else {
      setErrors({});
      setIsFormValid(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      for (const issue of result.error.errors) {
        fieldErrors[issue.path[0] as keyof FormData] = issue.message;
      }
      setErrors(fieldErrors);
    } else {
      setErrors({});
      console.log("Date valide:", formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-6">
        {/* Email */}
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input input-bordered w-full ${errors.email ? "border-red-500" : ""}`}
            placeholder="exemplu@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Parola */}
        <div>
          <label className="label">
            <span className="label-text">Parolă</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`input input-bordered w-full ${errors.password ? "border-red-500" : ""}`}
              placeholder="Introduceți parola"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Confirmare parolă */}
        <div>
          <label className="label">
            <span className="label-text">Confirmă parola</span>
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`input input-bordered w-full ${errors.confirmPassword ? "border-red-500" : ""
                }`}
              placeholder="Confirmă parola"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Submit */}
        <div>
          <button className="btn btn-primary w-full" type="submit" disabled={!isFormValid}>
            Înregistrare
          </button>
        </div>
      </form>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <div>
          Aceste date vin din mongodb cloud database
          {products && products?.map((product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
        <header className="bg-red-600 text-white p-4">
          {/* h1: titlul principal al site-ului — UNIC pe pagină */}
          <h1 className="text-4xl font-bold">Restaurant La Bunica</h1>
        </header>

        <button className="btn btn-active">Default</button>
        <button className="btn btn-active btn-neutral">Neutral</button>
        <button className="btn btn-active btn-primary">Primary</button>
        <button className="btn btn-active btn-secondary">Secondary</button>
        <button className="btn btn-active btn-accent">Accent</button>
        <button className="btn btn-active btn-ghost">Ghost</button>
        <button className="btn btn-active btn-link">Link</button>

        <main className="p-6 max-w-4xl mx-auto">
          {/* h2: secțiune principală */}
          <h2 className="text-3xl font-semibold mb-4">Despre Noi</h2>
          <p>La Bunica este un restaurant de familie cu tradiție și suflet românesc.</p>

          {/* h3: sub-secțiune din "Despre Noi" */}
          <h3 className="text-2xl font-semibold mt-6">Istoricul Restaurantului</h3>
          <p>Deschis în 1990, localul a fost construit cu dragoste pentru mâncarea autentică.</p>

          {/* h4: sub-sub-secțiune — folosit rar */}
          <h4 className="text-xl font-medium mt-4">Perioada interbelică</h4>
          <p>Rețetele noastre provin din caietele bunicii, păstrate din perioada interbelică.</p>

          {/* h5: și mai adânc — pentru o secțiune mică, dar informativă */}
          <h5 className="text-lg font-medium mt-4">Ingrediente tradiționale</h5>
          <p>Folosim doar produse locale: ouă de țară, făină de moară, carne de la producători locali.</p>

          {/* h6: pentru detalii tehnice sau sub-note, rar folosit */}
          <h6 className="text-base font-medium mt-4 italic">Notă: Toate preparatele sunt făcute în casă</h6>
          <p className="mb-6">Ne asigurăm că fiecare fel de mâncare respectă rețeta originală.</p>
        </main>

        <footer className="bg-gray-100 p-4 text-center mt-10">
          <p>&copy; 2025 Restaurant La Bunica</p>
        </footer>
      </div>

      <div className="bg-black mt-[100px] ml-[100px] w-[70%] h-[450px] flex justify-center gap-[10px]">
        <img src="/images/example1.jfif" alt="" className="w-[10%] h-[100%] object-cover rounded-[10px] border-2 transition-all ease-in-out hover:w-[25%]" />
        <img src="/images/example2.jfif" alt="" className="w-[10%] h-[100%] object-cover rounded-[10px] border-2 transition-all ease-in-out hover:w-[25%]" />
        <img src="/images/example3.jfif" alt="" className="w-[10%] h-[100%] object-cover rounded-[10px] border-2 transition-all ease-in-out hover:w-[25%]" />
        <img src="/images/example4.jfif" alt="" className="w-[10%] h-[100%] object-cover rounded-[10px] border-2 transition-all ease-in-out hover:w-[25%]" />
      </div>

      <div>
        <EmilServiceComponent />
      </div>

    </div>
  );
}