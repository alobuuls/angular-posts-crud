import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';

// Services
import { AlertsService } from '../services/alerts.service';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean>;
  isFormEmptyGuardPendingChanges: () => boolean;
  wasFormSubmitted: boolean;
}

export const pendingChangesFormGuard: CanDeactivateFn<CanComponentDeactivate> = async component => {
  console.log('guard ejecutado', {
    isEmpty: component.isFormEmptyGuardPendingChanges(),
    wasSubmitted: component.wasFormSubmitted,
  });
  const alerts = inject(AlertsService);

  // Si ya envió o el formulario está vacío
  if (component.isFormEmptyGuardPendingChanges() || component.wasFormSubmitted) {
    return true;
  }

  const { isConfirmed } = await alerts.showAlert({
    title: '¿Estás seguro que deseas continuar?',
    icon: 'question',
    html: 'No has enviado el formulario. Si sales tendrás que llenarlo nuevamente. Esta acción es definitiva.',
    cancelText: 'Cancelar',
    confirmText: 'Sí, estoy seguro',
    opts: {
      confirmButtonColor: 'red',
    },
  });

  return isConfirmed;
};
