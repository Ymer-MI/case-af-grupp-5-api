import '../../css/Footer.css'
import { DigiTypography } from '@digi/arbetsformedlingen-react'
import { TypographyVariation } from '@digi/arbetsformedlingen'

export const Footer = () => <footer>
    <DigiTypography afVariation={ TypographyVariation.LARGE }>
        <section>
                <p>An</p>
                <p>Item</p>
                <p>Here</p>
        </section>
        <p>{ `\u00a9${new Date().getFullYear()}` } Grupp 5</p>
    </DigiTypography>
</footer>