export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      transactions: {
        Row: {
          created_at: string
          id: number
          user_id: string
          value: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          user_id: string
          value?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          user_id?: string
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      transcriptions: {
        Row: {
          created_at: string
          free_tier: boolean
          id: number
          process_time: number | null
          text: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          free_tier?: boolean
          id?: number
          process_time?: number | null
          text?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          free_tier?: boolean
          id?: number
          process_time?: number | null
          text?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transcriptions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      credits: {
        Row: {
          credits: number | null
          remaining_free_credits: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
