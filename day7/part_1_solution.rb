def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end


file_name = "input.txt"
arr = read_file(file_name).split(",").map(&:to_i)
min_fuel = 999999999999999
for i in 0...arr.size
  fuel = 0
  for j in 0...arr.size
    if j == i
      next
    end
    fuel += [arr[i], arr[j]].max - [arr[i], arr[j]].min
  end
  min_fuel = [min_fuel, fuel].min
end

p min_fuel