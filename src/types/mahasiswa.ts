export interface CreateMahasiswaArgs {
  userId: string;
  nim: string;
  fullname: string;
  semester: number;
  prodiId: string;
  konsentrasiId: string;
  proyekId?: string;
}

export interface UpdateMahasiswaArgs {
  id: string;
  nim?: string;
  fullname?: string;
  semester?: number;
  prodiId?: string;
  konsentrasiId?: string;
  proyekId?: string;
}
