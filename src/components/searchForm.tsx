import { useState } from "react"
import { DigiFormInput, DigiButton } from "@digi/arbetsformedlingen-react"

export default function SearchForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Sökresultat:", { title, description })
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}>
      <DigiFormInput
        afLabel="Titel"
        value={title}
        onAfOnInput={(e: CustomEvent<{ value: string }>) => setTitle(e.detail.value)}
      />

      <DigiFormInput
        afLabel="Beskrivning"
        value={description}
        onAfOnInput={(e: CustomEvent<{ value: string }>) => setDescription(e.detail.value)}
      />

      <DigiButton afType="submit">
        Sök
      </DigiButton>
    </form>
  )
}
