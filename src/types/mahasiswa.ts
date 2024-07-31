import { RoleMahasiswa } from "@prisma/client";

export interface CreateMahasiswaArgs {
  userId: string;
  nim: string;
  fullname: string;
  semester: number;
  prodiId?: string;
  konsentrasiId?: string;
  proyekId?: string;
  kelasId?: string;
  angkatanId?: string;
  kelompokId?: string;
  role: RoleMahasiswa;
}

export interface UpdateMahasiswaArgs {
  id: string;
  userId: string;
  nim?: string;
  nilai?: number;
  fullname?: string;
  semester?: number;
  prodiId?: string;
  konsentrasiId?: string;
  proyekId?: string;
  kelasId?: string;
  angkatanId?: string;
  kelompokId?: string;
  role?: RoleMahasiswa;
}
