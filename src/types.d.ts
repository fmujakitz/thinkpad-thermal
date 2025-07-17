import type DmiUtil from './Dmi.ts'
import type IbmAcpiUtil from './IbmAcpi.ts'
import type SensorsUtil from './Sensors.ts'
import type { Difference } from './vendor/microdiff.ts'
import type { Item, DropDown, Group } from './ThermalUI.ts'

type TupleOf<T, N extends number, R extends T[] = []> = R['length'] extends N
  ? R
  : TupleOf<T, N, [T, ...R]>

declare global {
  type FilterFn<T> = (value: T, index: number, array: T[]) => boolean
  type ReduceFn<T, U> = (accumulator: U, value: T, data) => U
  type SizedArray<T, N extends number> = TupleOf<T, N>

  namespace ThinkPadThermal {
    type IndicatorKeys = 'cpu' | 'gpu' | 'speed'

    type Unit = 'celsius' | 'fahrenheit'

    type Config = {
      temperatureUnit: Unit
      checkInterval: number
      fanSpeedUnit?: string
      quirksMode: boolean
    }

    type ValueReadings = {
      [k: string]: string
    }

    type DmiData = {
      [K in (typeof DmiUtil.TAGS)[number]]: string
    }

    type IbmAcpiData<V = number> = {
      cpu: V
      gpu: V
      status: 'initializing' | 'enabled' | 'disabled'
      speed: V
      level: 'auto' | 'disengaged' | 'full-speed' | string
      levels: string[]
    }

    type SensorsData = {
      cpus: {
        [name: string]: ValueReadings
      }
      hdds: ValueReadings
      // bats: object
      fans: ValueReadings
      other: ValueReadings
    }

    type ThermalData = IbmAcpiData<string> &
      SensorsData & {
        hasDedicatedGpu: boolean
        isControllable: boolean
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
    type Element = Item | DropDown | Group
    type PrevElement = Element & { prev: unknown }
  }
}
