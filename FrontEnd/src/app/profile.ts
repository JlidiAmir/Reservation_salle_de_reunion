export class Profile {
  public idProfile: number;
  public email: string;
  public mdp: string;
  public role: string;
  constructor(idProfile: number, email: string, mdp: string, role: string) {
    this.idProfile = idProfile;
    this.email = email;
    this.mdp = mdp;
    this.role = role;
  }
}
