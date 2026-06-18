import type DmiUtil from './Dmi.ts'
import type IbmAcpiUtil from './IbmAcpi.ts'
import type SensorsUtil from './Sensors.ts'
import type { Difference } from './vendor/microdiff.ts'
import type { Item, Group } from './ThermalUI.ts'

type TupleOf<T, N extends number, R extends T[] = []> = R['length'] extends N
  ? R
  : TupleOf<T, N, [T, ...R]>

declare global {
  type FilterFn<T> = (value: T, index: number, array: T[]) => boolean
  type ReduceFn<T, U> = (accumulator: U, value: T) => U
  type SizedArray<T, N extends number> = TupleOf<T, N>

  namespace ThinkPadThermal {
    type IndicatorKeys = 'cpu' | 'gpu' | 'speed'

    type Unit = 'celsius' | 'fahrenheit'

    type Config = {
      temperatureUnit: Unit
      checkInterval: number
      fanSpeedUnit?: string
    }

    type IbmAcpiData = {
      cpu: number
      gpu: number
      status: 'initializing' | 'enabled' | 'disabled'
      speed: number
      level: 'auto' | 'disengaged' | 'full-speed' | string
      levels: string[]
    }

    type LscpuEntries = {
      cpus: {
        socket: number
        modelname: string
      }[]
    }

    type Diff = Difference & { value?: string | object }
    type Diffs = Diff[]

    type Util = DmiUtil | IbmAcpiUtil | SensorsUtil
    type Element = Item | Group
    type PrevElement = Element & { prev: unknown }
  }
}
