export class JsonResponse {
  data: Object;
  errors: Object;
  meta: Object;

  constructor(inData: Object, inErrors: Object, inMeta: Object) {
      this.data = inData;
      this.errors = inErrors;
      this.meta = inMeta;
  }
}
