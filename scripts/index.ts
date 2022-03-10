
window.addEventListener('load', init)

function init (): void {
  const form = document.getElementById('searchForm') as HTMLFormElement
  const input = document.getElementById('search') as HTMLInputElement
  const button = document.getElementById('searchBtn') as HTMLButtonElement

  input.addEventListener('keyup', (e: Event): void => {
    const { value } = e.target as HTMLInputElement
    if (/^\s*(#?)([A-F0-9]{2}){3}\s*$/i.test(value)) {
      button.disabled = false
    } else {
      button.disabled = true
    }
  })

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    const value = input.value

    window.location.href = `/color/${value.replace(/(#|\s+)/g, '')}`
  })
}
