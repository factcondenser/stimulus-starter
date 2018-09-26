import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "pin" ]

    connect() {
        if (document.queryCommandSupported("copy")) {
            this.element.classList.add("clipboard--supported")
        }
    }

    copy(event) {
        event.preventDefault()
        this.pinTarget.select()
        document.execCommand("copy")
    }
}
