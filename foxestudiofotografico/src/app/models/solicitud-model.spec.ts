import { SolicitudModel } from './solicitud-model';

describe('SolicitudModel', () => {
  it('should create an instance', () => {
    expect(new SolicitudModel("","",0,"","")).toBeTruthy();
  });
});
