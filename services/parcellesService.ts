import { db } from "@/config/firebaseConfig";
import { ParcelleInput } from "@/types/parecelle";
import { addDoc, collection } from "firebase/firestore";
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
