export interface DataUsers {
 author: Author[]
 createAt: number
 id: string
 jabatan: string
 kecamatan: {
  id: string
  name: string
  regency_id: string
 }
 kelurahan: {
  district_id: string
  id: string
  name: string
 }
 kota: {
  id: string
  name: string
  province_id: string
 }
 name: string
 provinsi: {
  id: string
  name: string
 }
 status_karyawan: string
 umur: number
}
export interface Author {
 email: string;
 name: string;
 picture: string;
 uid: string
}