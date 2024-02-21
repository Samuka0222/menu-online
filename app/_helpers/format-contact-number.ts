export default function formatContactNumber(contactNumber: string): string {
  const formatedContactNumber = `
    (${contactNumber.slice(0, 2)}) 9 ${contactNumber.slice(2, 6)}-${contactNumber.slice(6)}
  `

  return formatedContactNumber;
}