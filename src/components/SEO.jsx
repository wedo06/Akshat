import { useEffect } from 'react'

export default function SEO({ title, description }) {
  useEffect(() => {
    const defaultTitle = 'Akshat Agrawal — Full-Stack Engineer & Data Analyst'
    const defaultDesc = 'Portfolio of Akshat Agrawal. Founder of WeDo Agency, Full-Stack Developer, and Data Analyst specializing in scalable web architectures and data intelligence.'

    document.title = title ? `${title} | Akshat Agrawal` : defaultTitle

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = description || defaultDesc

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.content = document.title

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.content = description || defaultDesc
  }, [title, description])

  return null
}
