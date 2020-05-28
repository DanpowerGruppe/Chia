namespace Chia.Client

module Style =

    open Elmish
    open Elmish.Toastr

    let toast title message =
        Toastr.message message
        |> Toastr.title title
        |> Toastr.position TopRight
        |> Toastr.timeout 3000
        |> Toastr.hideEasing Swing
        |> Toastr.showCloseButton

    let errorToast title message: Cmd<_> = toast title message |> Toastr.error

    let successToast title message: Cmd<_> = toast title message |> Toastr.success

    let warningToast title message: Cmd<_> = toast title message |> Toastr.warning
