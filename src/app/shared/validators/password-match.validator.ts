import { FormGroup, ValidationErrors } from '@angular/forms';

export function validatePasswordMatch(
  group: FormGroup
): ValidationErrors | null {
  // take the two FormControls
  const { newPassword, checkPassword } = group.controls;
  if (newPassword.value === checkPassword.value) {
    return null;
  } else {
    group.get('checkPassword')?.setErrors({ 'password-mismatch': true });
    return { 'password-mismatch': true };
  }
}
