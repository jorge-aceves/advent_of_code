def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end


file_name = "input.txt"
arr = read_file(file_name).split(",").map(&:to_i)
min_fuel = 999999999999999
for j in arr.min..arr.max
  fuel = 0
  for i in 0...arr.size
    r = [arr[i], j].max - [arr[i], j].min
    extra = (r * (r+1))/2
    fuel += extra
  end
  min_fuel = [min_fuel, fuel].min
end

p min_fuel