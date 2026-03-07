import { db } from "@/config/firebaseConfig";
import { Parcelle, ParcelleInput } from "@/types/parecelle";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
export async function createParcelle(
  userId: string,
  data: Omit<ParcelleInput, "userId">,
): Promise<string> {
  const ref = await addDoc(collection(db, "parcelles"), {
    ...data,
    userId,
    createdAt: new Date().toISOString(),
  });
  return ref.id;
}

export async function getParcellesByUser(userId: string): Promise<Parcelle[]> {
  const myQery = query(
    collection(db, "parcelles"),
    where("userId", "==", userId),
  );
  const data = await getDocs(myQery);
  return data.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  })) as Parcelle[];
}
