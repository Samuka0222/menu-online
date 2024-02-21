export default function formatZipCode(zipCode: string) {
  const formatedZipCode = `
    ${zipCode.slice(0, 5)}-${zipCode.slice(5)}
  `

  return formatedZipCode;
}