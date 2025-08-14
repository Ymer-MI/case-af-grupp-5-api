import { useState } from "react"
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react"

export default function SearchForm() {
  const [title, setTitle] = useState("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log("Sökresultat:", { title })
      }}
      style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}
    >
      <DigiFormInputSearch
        value={title}
        afLabel="Titel"
        afButtonText="Sök"
        onAfOnInput={(e: CustomEvent<{ value: string }>) =>
          setTitle(e.detail.value)
        }
      />
    </form>
  )
}
