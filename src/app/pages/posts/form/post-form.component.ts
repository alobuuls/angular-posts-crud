import { Component, Input, Output, EventEmitter, OnInit, DestroyRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IBodyPost } from 'src/app/interfaces/api-posts.interface';

const KEY_LS = 'form-create';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() initialValues: Partial<IBodyPost> | null = null;
  @Input() isSendingForm = false;
  @Output() submitted = new EventEmitter<IBodyPost>();

  form!: FormGroup;
  wasFormSubmitted: boolean = false;

  constructor(
    private destroyRef: DestroyRef,
    private fb: FormBuilder
  ) {}

  get title() {
    return this.form.get('title') as FormControl;
  }
  get author() {
    return this.form.get('author') as FormControl;
  }
  get content() {
    return this.form.get('content') as FormControl;
  }

  get isCreate() {
    return this.mode === 'create';
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required, Validators.minLength(5)]],
    });

    if (this.isCreate) this.initLsPersistence();

    if (this.initialValues) {
      this.form.patchValue(this.initialValues);
    }
  }

  // Elimina errorVisible y reemplaza con:
  showErrors(c: FormControl): boolean {
    return this.isCreate ? c.touched : c.dirty;
  }

  private initLsPersistence(): void {
    const saved = localStorage.getItem(KEY_LS);
    if (saved) this.form.patchValue(JSON.parse(saved));

    this.form.valueChanges.pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (!this.isSendingForm) localStorage.setItem(KEY_LS, JSON.stringify(this.form.value));
    });
  }

  clearLs(): void {
    localStorage.removeItem(KEY_LS);
  }

  isFormEmpty(): boolean {
    return Object.values(this.form.getRawValue()).every(v => v === null || v === undefined || v === '');
  }

  submit(): void {
    if (this.form.invalid) return;
    this.wasFormSubmitted = true;
    this.submitted.emit(this.form.value as IBodyPost);
  }
}
