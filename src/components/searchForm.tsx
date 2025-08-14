import { useState } from "react"
import { DigiFormInput, DigiButton } from "@digi/arbetsformedlingen-react"

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
      <DigiFormInput
        afLabel="Titel"
        value={title}
        onAfOnInput={(e: CustomEvent<{ value: string }>) =>
          setTitle(e.detail.value)
        }
      />

      <DigiButton afType="submit">
        Sök
      </DigiButton>
    </form>
  )
}
