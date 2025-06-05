import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../lib/agent";

interface ProductsResponse {
  success: boolean;
  data: Products[]; // lista de produse este aici
}

interface Products {
  _id: string;
  name: string;
  price: number;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};


export const useProducts = (id?: string) => {
  const queryClient = useQueryClient();

  const { data: products, isPending } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await agent.get<ProductsResponse>("/products");
      console.log(response.data); // Aici se va vedea întreg obiectul, cu "successd" și "data".
      return response.data.data; // Extragem lista de produse din response.data.data
    },
    // enabled: !id && location.pathname === "/products"
  });

  const { data: product, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const response = await agent.get<Products>(`/products/${id}`);
      return response.data;
    },
    enabled: !!id
  });

  const createProduct = useMutation({
    mutationFn: async (product: Products) => {
      const response = await agent.post("/products", product);
      return response.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["products"] });
    }
  });

  const updateProduct = useMutation({
    mutationFn: async (product: Products) => {
      await agent.put(`/products/${product._id}`, product);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["products"] });
    }
  });

  const deleteProduct = useMutation({
    mutationFn: async (id: string) => {
      await agent.delete(`/products/${id}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["products"] });
    }
  });

  return {
    products,
    product,
    isPending,
    isLoadingProduct,
    createProduct,
    updateProduct,
    deleteProduct
  };
};
