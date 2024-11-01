"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeCategories() {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#264BC0",
        height: "100%"
      }}
    >
      <h2 style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>
        Histoire
      </h2>
      <ul style={{ width: '100%'}}>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/history/quiz")}
        >
          Quiz
        </li>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/history")}
        >
          Question / Réponse
        </li>
      </ul>
      <h2 style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>
        Géographie
      </h2>
      <ul style={{ width: '100%'}}>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/geography")}
        >
          Quiz
        </li>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/geography")}
        >
          Question / Réponse
        </li>
      </ul>
      <style jsx>{`
        .li-style {
          padding: 10px;
          border-bottom: 0.01rem solid #FCA4F0;
        }
        h2 {
          border-bottom: 0.05rem solid #FCA4F0;
        }
        
      `}</style>
    </div>
  );
}
