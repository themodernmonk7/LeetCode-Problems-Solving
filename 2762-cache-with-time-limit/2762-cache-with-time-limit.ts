class TimeLimitedCache {
    private cache: Map<number, {value: number, expirationTime: number} >
    constructor() {
        this.cache = new Map()
    }
    
    set(key: number, value: number, duration: number): boolean {
        const currentTime = Date.now()
        const isAlreadyExists = this.cache.has(key)
        const expirationTime = currentTime + duration
        this.cache.set(key, {value, expirationTime})
        return isAlreadyExists
    }
    
    get(key: number): number {
        const currentTime = Date.now()
        const entry = this.cache.get(key)
        if(!entry) return -1

        if(currentTime > entry.expirationTime) {
            this.cache.delete(key)
            return -1
        }
        return entry.value
        
    }
    
    count(): number {
        const currentTime = Date.now()
        let count = 0

        for(const [key, entry] of this.cache.entries()) {
            if(currentTime <= entry.expirationTime) {
                count++
            } else {
                this.cache.delete(key)
            }
        }
        return count
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */