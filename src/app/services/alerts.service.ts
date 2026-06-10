import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

type AlertIcon = 'success' | 'warning' | 'error' | 'info' | 'question';

interface IToast {
  icon: AlertIcon;
  title: string;
  time?: number;
  stopTimer?: boolean;
}

interface IAlert {
  title: string;
  html?: string;
  icon?: AlertIcon;
  allowClose?: boolean;
  confirmText?: string;
  cancelText?: string;
  opts?: SweetAlertOptions;
}

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  showToast({ icon, title, time = 3500, stopTimer = true }: IToast) {
    Swal.mixin({
      toast: true,
      position: 'top-end',
      timer: time,
      timerProgressBar: true,
      showConfirmButton: false,

      didOpen: toast => {
        if (!stopTimer) return;
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    }).fire({
      icon,
      title,
    });
  }

  showAlert({ title, html, icon, allowClose = true, confirmText = 'Guardar', cancelText = 'Cerrar', opts }: IAlert) {
    return Swal.fire({
      title,
      html,
      icon,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      allowEscapeKey: allowClose,
      allowOutsideClick: allowClose,
      reverseButtons: true,
      ...opts,
    });
  }
}
